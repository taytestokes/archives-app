import RecordDataRow from "./RecordDataRow";

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
              Delete
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {records.map((record) => {
            return <RecordDataRow key={record.id} record={record} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
