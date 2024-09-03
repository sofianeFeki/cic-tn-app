import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteFicheTech } from '../../../redux/productSlice';

// FormElements.js
export const InputField = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-md font-bold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-200 bg-white py-1.5 px-3 text-sm text-black focus:outline-none focus:ring focus:border-blue-300 transition duration-150 shadow-md"
    />
  </div>
);

export const TextArea = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-md font-bold">
      {label}
    </label>
    <textarea
      type={type}
      id={id}
      name={name}
      rows="4"
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-200 bg-white py-1.5 px-3 text-sm text-black focus:outline-none focus:ring focus:border-blue-300 transition duration-150 shadow-md"
    />
  </div>
);

export const SelectField = ({ id, name, value, onChange, label, options }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-md font-bold">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="rounded-md border border-gray-200 py-1.5 px-2 focus:outline-none focus:ring focus:border-blue-300 transition duration-150 shadow-md"
    >
      <option value="" disabled hidden>
        Choose an option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const Tabs = ({
  handleChangeFicheTech,
  dispatch,
  addFicheTech,
  formState,
  mode,
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    {
      label: 'Fiche Technique',
      content: (
        <div>
          {mode !== 'lecture' && (
            <div className="flex justify-end">
              <button
                onClick={addFicheTech}
                className="flex justify-end p-1 mb-1 bg-green-500 text-white rounded"
              >
                <PlusIcon className="block h-6 w-6 mr-1" />
                <span>Add New Item</span>
              </button>
            </div>
          )}
          <table className="table-auto w-full">
            <tbody>
              {formState.ficheTech.length > 0 ? (
                formState.ficheTech.map((row, index) => (
                  <tr key={index} className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">
                      {mode !== 'lecture' ? (
                        <input
                          type="text"
                          name={`ficheTech-label-${index}`}
                          value={row.label}
                          onChange={(e) =>
                            handleChangeFicheTech(
                              index,
                              'label',
                              e.target.value
                            )
                          }
                          className="font-semibold block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm text-black focus:outline-none focus:ring focus:border-blue-300 transition duration-150 shadow-md"
                        />
                      ) : (
                        <span className="font-semibold">{row.label}</span>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {mode !== 'lecture' ? (
                        <input
                          type="text"
                          name={`ficheTech-value-${index}`}
                          value={row.value}
                          onChange={(e) =>
                            handleChangeFicheTech(
                              index,
                              'value',
                              e.target.value
                            )
                          }
                          className="block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm text-black focus:outline-none focus:ring focus:border-blue-300 transition duration-150 shadow-md"
                        />
                      ) : (
                        <span>{row.value}</span>
                      )}
                    </td>
                    {mode !== 'lecture' && (
                      <td className="border align-middle text-center">
                        <button
                          onClick={() => {
                            console.log('Delete button clicked');
                            dispatch(deleteFicheTech(index));
                          }}
                          className="bg-red-500 text-white rounded p-1 inline-block"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={mode !== 'lecture' ? 3 : 2}
                    className="text-center py-4"
                  >
                    No items available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ),
    },
    { label: 'Video', content: <div>Video Content</div> },
    { label: 'Pdf produit', content: <div>PDF Content</div> },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab.label
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};
