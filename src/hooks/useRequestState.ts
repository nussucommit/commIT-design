import { useCallback, useState } from "react"

export type RequestState = {
  loading: boolean
  error?: string
  setError: (error: string) => void
  start: () => void
  end: () => void
}

const useRequestState = (): RequestState => {
  const [loading, setLoading] = useState(false)
  const [error, setErrorState] = useState<string>()

  const start = useCallback(() => {
    setLoading(true)
    setErrorState(undefined)
  }, [])

  const end = useCallback(() => {
    setLoading(false)
  }, [])

  const setError = useCallback((message: string) => {
    setErrorState(message)
    setLoading(false)
  }, [])

  return {
    loading,
    error,
    setError,
    start,
    end,
  }
}

export default useRequestState
