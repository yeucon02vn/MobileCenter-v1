import { Star, StarBorderOutlined } from "@material-ui/icons"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TreeItem from "@material-ui/lab/TreeItem"
import TreeView from "@material-ui/lab/TreeView"
import React from "react"
import { useGetProviders } from "services/apis/provider.api"
import { formatMoney } from "utils"
import { v4 as uuid } from "uuid"

interface CategoryModel {
  id: string
  name: string
}

interface Price extends CategoryModel {
  min: number
  max: number
}

const Prices: Price[] = [
  {
    id: uuid(),
    name: `under ${formatMoney(100)}`,
    min: 1,
    max: 99,
  },
  {
    id: uuid(),
    name: `${formatMoney(100)} to ${formatMoney(200)}`,
    min: 100,
    max: 199,
  },
  {
    id: uuid(),
    name: `${formatMoney(200)} to ${formatMoney(300)}`,
    min: 200,
    max: 299,
  },
]
interface Discount extends CategoryModel {
  value: number
}
const discounts: Discount[] = [
  {
    id: uuid(),
    name: "10% off or more",
    value: 0.1,
  },
  {
    id: uuid(),
    name: "20% off or more",
    value: 0.2,
  },
  {
    id: uuid(),
    name: "30% off or more",
    value: 0.3,
  },
]

const MAX_RATE = 5

interface CategorySidebarProps {
  setFilter: (draft) => void
}

export const CategorySidebar: React.FC<CategorySidebarProps> = (props) => {
  const [expanded] = React.useState<string[]>(["1", "2", "3", "4"])
  const { setFilter } = props
  const { data: providers } = useGetProviders()

  const handleToggle = (_: React.ChangeEvent<{}>, nodeIds: string[]) => {
    // setExpanded(nodeIds)
  }

  const textColor = "text-indigo-900 "

  const ratings: number[] = Array.from({ length: MAX_RATE }, (_, i) => i + 1).reverse()
  return (
    <div className="inline-block w-auto min-h-screen px-12 pt-16 pr-20 bg-gray-50">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        onNodeToggle={handleToggle}
        className="!text-cloud-burst-700"
        // onNodeSelect={handleSelect}
      >
        <TreeItem
          nodeId="1"
          label="Product types:"
          className="!mb-4"
          classes={{
            label: textColor + "!font-bold",
          }}
        >
          <div className="pt-2" />
          {providers?.map((v) => (
            <TreeItem
              nodeId={v.id}
              label={v.name}
              key={v.id}
              classes={{ label: textColor }}
              onClick={() => {
                setFilter({
                  provider: v.name,
                })
              }}
            />
          ))}
        </TreeItem>

        <TreeItem
          nodeId="2"
          label="Rating"
          className="!my-4 !pl-4 !text-cloud-burst-700"
          classes={{ label: textColor + "!font-bold" }}
        >
          <div className="pt-2" />
          {ratings.map((rate, i) => {
            const fullStar = Array.from({ length: rate }, (_, i) => i)
            const emptyStar = Array.from({ length: MAX_RATE - rate }, (_, i) => i)
            return (
              <div
                className="flex cursor-pointer"
                key={i}
                onClick={() => {
                  setFilter({
                    rate: rate,
                  })
                }}
              >
                {fullStar.map((_, fi) => (
                  <Star color="primary" key={fi} />
                ))}
                {emptyStar.map((_, ei) => (
                  <StarBorderOutlined color="primary" key={ei} />
                ))}
              </div>
            )
          })}
        </TreeItem>

        <TreeItem
          nodeId="3"
          label="Price:"
          className="!mb-4"
          classes={{ label: textColor + "!font-bold" }}
        >
          <div className="pt-2" />
          {Prices.map((v) => (
            <TreeItem
              nodeId={v.id}
              label={v.name}
              key={v.id}
              classes={{ label: textColor }}
              onClick={() => {
                setFilter({
                  minPrice: v.min,
                  maxPrice: v.max,
                })
              }}
            />
          ))}
        </TreeItem>
        <TreeItem
          nodeId="4"
          label="Discount:"
          className="!mb-4"
          classes={{ label: textColor + "!font-bold" }}
        >
          <div className="pt-2" />
          {discounts.map((v) => (
            <TreeItem
              nodeId={v.id}
              label={v.name}
              key={v.id}
              classes={{ label: textColor }}
              onClick={() => {
                setFilter({
                  discount: v.value,
                })
              }}
            />
          ))}
        </TreeItem>
      </TreeView>
    </div>
  )
}
