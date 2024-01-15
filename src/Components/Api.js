import Axios from "axios";

import React, { useEffect, useState } from 'react'

export default function Api() {
  const [url, setUrl] = useState("")

  useEffect(() => {
    Axios.get("https://aws.random.cat/meow").then((url) => {
      setUrl(url.data["file"]);
    })
  },[])

  return (
    <div>
      {url !== "" && (
        <img src={url} alt="cat" />
        )}
    </div>
  )
}
