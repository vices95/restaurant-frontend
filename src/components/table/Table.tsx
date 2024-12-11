import { TableState } from '@/graphql/generated';
import Image from 'next/image';

export const Table = ({
  state,
  request,
}: {
  state: TableState;
  request?: { id: string; description: string; price: number }[] | null; // Request from the table
}) => {
  //Here we build an object to link the images with the states
  const stateImages: Record<TableState, { src: string; alt: string }> = {
    [TableState.Empty]: { src: '/empty_table.png', alt: 'Empty Table' },
    [TableState.Waiting]: {
      src: '/waiting_table.png',
      alt: 'Waiting Table',
    },
    [TableState.Attended]: {
      src: '/attended_table.png',
      alt: 'Attended Table',
    },
  };

  //select the corresponding object
  const stateData = stateImages[state];

  if (!stateData) return null;

  // Here we calculate the total amount to be paid, we are working with Integers
  const total = request?.reduce((acc, item) => acc + item.price, 0) ?? 0;

  // Create the tooltip content, as we 'create a component' we cant use html native tooltip
  // TODO: Move this to a component.
  const tooltipContent = request?.length ? (
    request.map((item) => (
      <div key={item.id} className="mb-2">
        <strong>{item.description}</strong> - {item.price} €
      </div>
    ))
  ) : (
    <div className="text-sm">Sin pedidos</div>
  );

  return (
    <div className="relative w-full flex justify-center">
      <div className="group relative">
        <Image
          src={stateData.src}
          alt={stateData.alt}
          width={100}
          height={100}
          className="justify-self-center"
        />
        <div className="absolute w-max top-0 p-2 bg-white text-black text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="bg-gray-800 text-white p-2 rounded-md w-fit">
            {tooltipContent}
            <div>
              <strong>Total: </strong>
              {total} €
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
