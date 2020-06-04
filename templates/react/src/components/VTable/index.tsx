/* 表格组件 */
import React from 'react';
import classnames from 'classnames'
import './index.scss'

interface Column {
  key: string
  [key: string]: string
}

export interface Props {
  data: any[]
  columns?: Column[]
  className?: string
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement>

const VTable: React.FC<MixinProps> = (props) => {
  const { data, columns, className, ...rest } = props

  return (
    <div className={classnames('VTable', className)} {...rest}>
      <table>
        <thead>
          <tr>
            {
              columns && columns.map((item, index) => (
                <th key={index}>{item.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) => (
              <tr key={i}>
                {
                  columns && columns.map((column, j) => (
                    <td key={j}>{item[column.key]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

VTable.defaultProps = {
  data: [],
  className: '',
}

VTable.displayName = 'VTable'

export default VTable;
