export default function RecordTable({ records }) {
  return (
    <div className="flex flex-col border border-zinc-200 rounded-md">
      <table className="table-auto">
        <thead className="border-b border-zinc-200 bg-zinc-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold">Title</th>
            <th className="px-6 py-3 text-left text-xs font-semibold">URL</th>

            <th className="px-6 py-3 text-left text-xs font-semibold">Date</th>
            <th className="px-6 py-3 text-right text-xs font-semibold">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {records.map((record) => {
            const createdAt = new Date(record.createdAt).toLocaleDateString(
              "en-us",
              {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );
            return (
              <tr key={record.id}>
                <td className="px-6 py-4 text-xs">{record.title}</td>
                <td className="px-6 py-4 text-xs">{record.url}</td>
                <td className="px-6 py-4 text-xs">{createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
