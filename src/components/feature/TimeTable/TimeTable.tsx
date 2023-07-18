import { TimeTableProps } from './TimeTable.types'

const TimeTable: React.FC<TimeTableProps> = ({ title, data }: TimeTableProps) => (
  <div className='my-12 w-9/10 bg-background bg-opacity-70 p-10 lg:w-3/5 xl:w-1/2'>
    <h1 className='w-fit border-b-2 border-emerald-400 text-2xl'>{title}</h1>
    <table className='my-5 w-full table-auto'>
      <thead>
        <tr>
          <th className='px-4 py-2'>Date</th>
          <th className='px-4 py-2'>Content</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val) => (
          <tr key={val.date} className='bg-background hover:bg-slate-300 hover:text-background'>
            <td className='flex border-x border-emerald-400 px-4 py-2'>
              <p>{val.date}</p>
              <p className='ml-auto'>▷</p>
            </td>
            <td className='px-4 py-2'>{val.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
export default TimeTable
