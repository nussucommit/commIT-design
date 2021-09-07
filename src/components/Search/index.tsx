import { InputHTMLAttributes } from "react"
import cx from "classnames"
import { SearchIcon } from "@chakra-ui/icons"

import styles from "./Search.module.css"
import { Color } from "../../constants/theme"

export const Search = ({
  value,
  id,
  // To-do: add additional styling for disabled state (make it more visible that it is disabled)
  disabled,
  className,
  type = "text",
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  const cn = cx(styles.container, className)

  return (
    <div className={cn}>
      <SearchIcon
        w={5}
        h={5}
        color={Color.grayLight}
        className={styles.searchIcon}
      />
      <input
        {...rest}
        value={value}
        type={type}
        id={id as string}
        disabled={disabled as boolean}
      />
    </div>
  )
}
