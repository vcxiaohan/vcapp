/* 上拉加载和滚动加载 */
import React, { useState } from 'react';
import { Icon, PullToRefresh, ListView } from 'antd-mobile';
import { RowResult } from '@/model/Result'
import classnames from 'classnames'
import './index.scss'

export interface VScrollRefMethod {
  load: Function
}

export const defaultVScrollRefMethod = {
  load<T>(params: any, reset: boolean) {
    return {} as Promise<RowResult<T>>
  }
}

export interface Props {
  ref?: any
  api: Function
  renderRow: any
  className?: string
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement>

const Loading = () => {
  return (
    <>
      <Icon type='loading' />
      <span>加载中...</span>
    </>
  )
}

const VScroll: React.FC<MixinProps> = React.forwardRef((props, ref) => {
  const { api, renderRow, className, children, ...rest } = props
  const [params, setParams] = useState<any>()
  const [total, setTotal] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [more, setMore] = useState(true)

  const loadData = async (params: any, reset: boolean = false): Promise<RowResult<any>> => {
    !reset && setLoading(true)
    let res = await api(params)
    setLoading(false)
    setData([...reset ? [] : data, ...res.rows || []])
    return res
  }

  React.useImperativeHandle(ref, (): VScrollRefMethod => ({
    async load<T>(params: any, reset: boolean = false): Promise<RowResult<T>> {
      const p = { pageNum: 1, pageSize: 10, ...params }
      setParams(p)

      let res = await loadData(p, reset)
      setTotal(res.total)
      return res
    },
  }))

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2,
  })

  return (
    <div className={classnames('VScroll', className)} {...rest}>
      <ListView
        dataSource={dataSource.cloneWithRows(data)}
        renderFooter={() => (
          <div className='VScroll-loading'>
            {
              loading ? <Loading /> : <span>{more ? '上拉加载' : '没有更多了'}</span>
            }
          </div>
        )}
        renderRow={renderRow}
        pullToRefresh={
          <PullToRefresh
            getScrollContainer={() => null}
            distanceToRefresh={50}
            indicator={{
              deactivate: '下拉刷新', activate: '松手刷新', release: <>
                <div className='VScroll-loading'>
                  <Loading />
                </div>
              </>
            }}
            direction='down'
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true)
              const p = { ...params, pageNum: 1 }
              setParams(p)
              await loadData(p, true)
              setRefreshing(false)
            }}
          >
          </PullToRefresh>
        }
        onEndReached={async () => {
          const p = { ...params, pageNum: params.pageNum + 1 }
          setParams(p)

          const m = params.pageNum < Math.ceil(total / params.pageSize)
          setMore(m)

          if (m) await loadData(p)
        }}
        pageSize={params ? params.pageSize : 10}
      />
    </div>
  );
})

VScroll.defaultProps = {
  api() { },
  className: '',
}

VScroll.displayName = 'VScroll'

export default VScroll;
