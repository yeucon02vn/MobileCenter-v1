import Skeleton from "@material-ui/lab/Skeleton"
import cx from "classnames"
import React from "react"
import { useGetImg } from "services/apis/images.api"
import { metrics } from "theme"
import { base64ToImg } from "utils"
import { ProductContent } from "./ProductContent"

interface ProductItemThumbnailProps {
  loading: boolean
  thumbnailUrl: string
}

export const ProductItemThumbnail: React.FC<ProductItemThumbnailProps> = ({
  loading,
  thumbnailUrl,
}) => {
  return (
    <div className="w-full">
      {loading && (
        <Skeleton
          animation="wave"
          variant="rect"
          className={cx(
            {
              hidden: !loading,
            },
            "mb-6 rounded-t-2xl w-full",
          )}
          style={{
            height: (metrics.img.md * 3) / 4,
          }}
        />
      )}
      <img
        alt="thumbnail"
        src={thumbnailUrl}
        className={cx(
          {
            hidden: loading,
          },
          "mb-6 rounded-t-2xl w-full",
        )}
        style={{
          height: (metrics.img.md * 3) / 4,
        }}
      />
    </div>
  )
}

interface ProductItemProps {
  product: API.ProductData
  className?: string
  onClick?: (id: string) => void
}

export const ProductItem: React.FC<ProductItemProps> = ({ product, className, onClick }) => {
  const { id, thumbnailId } = product
  const { data, isFetching: loading } = useGetImg(thumbnailId)
  const thumbnailUrl = base64ToImg(data || "")

  return (
    <div
      className={cx(" m-auto cursor-pointer card card-zoom ", className)}
      onClick={() => onClick && onClick(id)}
    >
      <ProductItemThumbnail loading={loading} thumbnailUrl={thumbnailUrl} />
      <ProductContent product={product} loading={loading} />
    </div>
  )
}
