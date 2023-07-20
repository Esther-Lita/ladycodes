import { useEffect } from 'react'

import { register } from '@teamhanko/hanko-elements'

const hankoApi = 'https://a9360f8e-353f-4270-ac58-ad68cb4598ad.hanko.io'

export default function HankoAuth() {
  useEffect(() => {
    // register the component
    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
    register({ shadow: true }).catch((error) => {
      // handle error
    })
  }, [])

  return <hanko-auth api={hankoApi} />
}
