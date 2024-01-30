import React from 'react'

export function useDebounce(value: string) {
	const [debouncedValue, setDebouncedValue] = React.useState<string>(value)

	React.useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), 500)

		return () => {
			clearTimeout(timer)
		}
	}, [value])

	return debouncedValue
}