import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

export function useProjects() {
  const [data, setData] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      // simula carregamento async
      setTimeout(() => {
        setData(projects)
        setIsLoading(false)
      }, 300)
    } catch (err) {
      setError(err as Error)
      setIsLoading(false)
    }
  }, [])

  return {
    data,
    isLoading,
    error
  }
}
