interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  isFetching: boolean;
  isPreviousData: boolean;
  onPageChange: (page: number) => void;
}

export const Paginator = ({
  currentPage,
  totalPages,
  hasNextPage,
  isFetching,
  isPreviousData,
  onPageChange,
}: PaginatorProps) => {
  const nextDisabledState = isPreviousData || !hasNextPage || isFetching;
  return (
    <div className='flex justify-center gap-8 items-center w-full max-w-4xl'>
      <div className='flex gap-2'>
        <button
          className='btn btn-sm'
          onClick={() => onPageChange(0)}
          disabled={currentPage === 0 || isFetching}
        >
          First
        </button>
        <button
          className='btn btn-sm'
          onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0 || isFetching}
        >
          Previous
        </button>
      </div>

      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
      <div className='flex gap-2'>
        <button
          className='btn btn-sm'
          onClick={() => {
            if (!isPreviousData) {
              onPageChange(Math.min(currentPage + 1, totalPages - 1));
            }
          }}
          disabled={nextDisabledState}
        >
          Next
        </button>
        <button
          className='btn btn-sm'
          onClick={() => onPageChange(totalPages - 1)}
          disabled={nextDisabledState}
        >
          Last
        </button>
      </div>
    </div>
  );
};
