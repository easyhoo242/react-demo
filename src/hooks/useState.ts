export function useState<T>(_state: T) {
  let state = null

  const setState = (_state: T) => {
    state = _state
  }

  return { state, setState }
}
