export const incCounter = (value) => ({
    type: 'increment',
    payload: value,
});
export const decCounter = (value) => ({
    type: 'decrement',
    payload: value
});
export const resetCounter = () => ({
    type: 'reset',
});
export const ownerName = (name) => ({
    type: 'name',
    payload: name,
});
