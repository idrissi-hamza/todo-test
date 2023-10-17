'use client'

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchTask = ({ value, onChange }: SearchInputProps) => (
  <input
    className="px-2 py-1 font-light  bg-white  border-2 rounded-md outline-none transition ease-in-out hover:border-slate-700 "
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search tasks..."
  />
);

export default SearchTask;