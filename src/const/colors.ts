export const colors = [
    'bg-red-100', 'bg-red-200', 'bg-red-300',
    'bg-blue-100', 'bg-blue-200', 'bg-blue-300',
    'bg-green-100', 'bg-green-200', 'bg-green-300',
    'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300',
    'bg-purple-100', 'bg-purple-200', 'bg-purple-300',
    'bg-teal-100', 'bg-teal-200', 'bg-teal-300',
    'bg-pink-100', 'bg-pink-200', 'bg-pink-300',
    'bg-orange-100', 'bg-orange-200', 'bg-orange-300',
    'bg-lime-100', 'bg-lime-200', 'bg-lime-300',
    'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300',
    'bg-rose-100', 'bg-rose-200', 'bg-rose-300',
    'bg-cyan-100', 'bg-cyan-200', 'bg-cyan-300',
    'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300',
    'bg-sky-100', 'bg-sky-200', 'bg-sky-300',
    'bg-fuchsia-100', 'bg-fuchsia-200', 'bg-fuchsia-300',
    'bg-violet-100', 'bg-violet-200', 'bg-violet-300',
    'bg-amber-100', 'bg-amber-200', 'bg-amber-300',
    'bg-gray-100', 'bg-gray-200', 'bg-gray-300',
    'bg-slate-100', 'bg-slate-200', 'bg-slate-300',
    'bg-stone-100', 'bg-stone-200', 'bg-stone-300',
    'bg-neutral-100', 'bg-neutral-200', 'bg-neutral-300',
    'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-300'
];


export const randomColor = () => colors[Math.floor(Math.random() * colors.length)];


export const buttonColors: Record<string, string> = {
    'bg-red-400': 'bg-red-500',
    'bg-blue-400': 'bg-blue-500',
    'bg-green-400': 'bg-green-500',
    'bg-yellow-400': 'bg-yellow-500',
    'bg-purple-400': 'bg-purple-500',
    'bg-orange-400': 'bg-orange-500',
    'bg-lime-400': 'bg-lime-500',
    'bg-indigo-400': 'bg-indigo-500',
    'bg-rose-400': 'bg-rose-500',
    'bg-cyan-400': 'bg-cyan-500',
    'bg-emerald-400': 'bg-emerald-500',
    'bg-sky-400': 'bg-sky-500',
    'bg-fuchsia-400': 'bg-fuchsia-500',
};

export const getRandomButtonColors = (): string => {
    const keys = Object.keys(buttonColors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const valueRandomKey = buttonColors[randomKey];
    return `${randomKey} hover:${valueRandomKey}`;
};
