const StoryModal = ({ isOpen, setIsOpen, story }) => {
  const {
    _id,
    selfId,
    partnerTd,
    image,
    rating,
    details,
    email,
    division,
    marriageDate,
    name,
  } = story || {};

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
              <div className="flex items-center justify-center mx-auto">
                <img
                  className="h-52 md:h-60 object-cover rounded-lg"
                  src={image}
                  alt="Modal Visual"
                />
              </div>

              <div className="mt-5 text-center">
                <h3
                  className="text-lg font-medium text-gray-800 dark:text-white"
                  id="modal-title"
                >
                  {name}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {details}
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Marriage Date:{" "}
                  {new Date(marriageDate).toLocaleDateString("en-US")}
                </p>
              </div>

              <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryModal;
