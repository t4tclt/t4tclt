import { useEffect } from 'react'

interface ExternalRedirectProps {
  url: string
}

export const ExternalRedirect = ({ url }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.replace(url)
  }, [url])

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  )
}
