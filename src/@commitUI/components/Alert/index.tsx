import React from "react"
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertDescription,
  AlertProps as ChakraAlertProps,
  CloseButton,
} from "@chakra-ui/react"
import cx from "classnames"

import styles from "./Alert.module.css"

type AlertProps = Omit<ChakraAlertProps, "variant"> & {
  hasIcon?: boolean
  canClose?: boolean
  className?: string
  message: string
}

export const Alert = ({
  status,
  message,
  hasIcon = true,
  canClose = false,
  className,
  ...alertProps
}: AlertProps) => {
  const cn = cx(styles.card, className)

  return (
    <ChakraAlert
      {...alertProps}
      status={status}
      alignItems="flex-start"
      className={cn}
    >
      {hasIcon && <AlertIcon marginTop={0.5} />}
      <AlertDescription>{message}</AlertDescription>
      {canClose && <CloseButton position="absolute" right="8px" top="8px" />}
    </ChakraAlert>
  )
}
