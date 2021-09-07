import React, { ButtonHTMLAttributes } from "react"
import { Spinner } from "@chakra-ui/react"
import cx from "classnames"

import styles from "./Button.module.css"

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "htmlType"> {
  id?: string
  block?: boolean
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  htmlType?: "reset" | "submit"
  onClick?: () => void
  size?: "small" | "large"
  icon?: React.ReactNode
  type?: "danger" | "success" | "outlined" | "text" | "primary" | "secondary"
  vCenter?: boolean
  isSubmit?: boolean
  isLoading?: boolean
}

export const Button = ({
  className,
  size = "large",
  type = "primary",
  vCenter,
  children,
  disabled,
  isSubmit,
  isLoading = false,
  ...buttonProps
}: Props) => {
  const cn = cx(
    styles.button,
    {
      [styles.danger]: type === "danger",
      [styles.success]: type === "success",
      [styles.secondary]: type === "secondary",
      [styles.text]: type === "text",
      [styles.outlined]: type === "outlined",
      [styles.small]: size === "small",
      [styles.disabled]: disabled,
    },
    className
  )
  return (
    <button
      {...buttonProps}
      className={cn}
      disabled={Boolean(disabled)}
      type={isSubmit ? "submit" : "button"}
    >
      {isLoading ? <Spinner size="xs" /> : children}
    </button>
  )
}
