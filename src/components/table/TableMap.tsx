import { useQuery, useSubscription } from '@apollo/client';
import { GET_TABLES } from '@/graphql/operations/tables/queries';
import { NEW_TABLE_STATE_SUBSCRIPTION } from '@/graphql/operations/tables/subscriptions';
import { GetTablesQuery, NewTableStateSubscription } from '@/graphql/generated';
import { Table } from './Table';

export default function TableMap() {
  const { data, loading, error } = useQuery<GetTablesQuery>(GET_TABLES);
  useSubscription<NewTableStateSubscription>(NEW_TABLE_STATE_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      console.log(
        'Cambio en el estado de la mesa:',
        subscriptionData.data?.newTableState,
      );
    },
  });

  if (loading) return <p>Cargando mesas...</p>;
  if (error) return <p>Error al cargar las mesas</p>;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data?.tables.map((table) => (
        <div
          key={table.id}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <p className="text-lg font-semibold">Mesa {table.id}</p>

          <Table state={table.state} request={table.request}></Table>
        </div>
      ))}
    </div>
  );
}
