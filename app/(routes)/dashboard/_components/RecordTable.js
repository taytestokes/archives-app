export default function RecordTable() {
  return (
    <div className="flex flex-col border border-zinc-200 rounded-md p-4">
      <table className="min-w-full">
        <thead className="border-b border-zinc-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold"
            >
              URL
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-semibold"
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
              John Brown
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm ">45</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm ">
              New York No. 1 Lake Park
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a className="text-blue-500 hover:text-blue-700" href="#">
                Delete
              </a>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
              Joe Black
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm ">31</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm ">
              Sidney No. 1 Lake Park
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a className="text-blue-500 hover:text-blue-700" href="#">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
