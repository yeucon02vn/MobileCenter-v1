import cx from "classnames"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useGetImg } from "services/apis"
import { base64ToImg } from "utils"

interface ImageWithFetchProps {
  imgId: string
  className?: string
  [rest: string]: any
}

export const ImageWithFetch: React.FC<ImageWithFetchProps> = ({ className, imgId, ...rest }) => {
  const { data } = useGetImg(imgId)
  const src = base64ToImg(data || "")
  return <LazyLoadImage src={src} {...rest} className={cx("", className)} effect="blur" />
}
