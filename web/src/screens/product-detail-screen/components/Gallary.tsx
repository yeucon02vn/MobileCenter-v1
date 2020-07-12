import { makeStyles } from "@material-ui/core"
import cx from "classnames"
import { ImageWithFetch } from "components"
import React from "react"

interface GallaryProps {
  className?: string
  thumbnailId: string
  gallariesId: string[]
}

const thumbnailWidth = 450
const gallaryWidth = 100

const useStyles = makeStyles({
  thumbnail: {
    minWidth: thumbnailWidth,
    width: thumbnailWidth,
    height: thumbnailWidth,
  },
  gallary: {
    minWidth: gallaryWidth,
    width: gallaryWidth,
    height: gallaryWidth,
  },
})

const MAX_ITEM = 4

export const Gallary: React.FC<GallaryProps> = (props) => {
  const { thumbnailId, gallariesId, className } = props
  const finalGalaries = gallariesId.slice(0, MAX_ITEM)
  const classes = useStyles()

  return (
    <div className={className}>
      <ImageWithFetch
        className={cx(classes.thumbnail, "mb-8")}
        alt="thumbnail"
        imgId={thumbnailId}
      />

      <div className="flex">
        {finalGalaries.map((v, i) => {
          return (
            <ImageWithFetch
              imgId={v}
              alt="gallary"
              key={i}
              className={cx(classes.gallary, {
                "mr-4": i !== finalGalaries.length - 1,
              })}
            />
          )
        })}
      </div>
    </div>
  )
}
