// components/StudentTable.js
import DataTable from 'react-data-table-component';

export default function StudentTable({ rows }) {
  const columns = [
    { name: 'ID', selector: row => row.student_id, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Class', selector: row => row.class, sortable: true },
    { name: 'Score', selector: row => row.assessment_score, sortable: true },
    { name: 'Persona', selector: row => row.persona, sortable: true },
  ];

  return (
    <DataTable
      columns={columns}
      data={rows}
      pagination
      highlightOnHover
      persistTableHead
      defaultSortFieldId={4}
    />
  );
}
