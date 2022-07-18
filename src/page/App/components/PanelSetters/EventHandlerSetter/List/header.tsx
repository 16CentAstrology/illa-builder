import { FC, useCallback } from "react"
import { AddIcon } from "@illa-design/icon"
import {
  fontButtonStyle,
  fontButtonWrapperStyle,
  headerWrapperStyle,
} from "./style"
import { EventHandlerSetterHeaderProps } from "./interface"
import { PanelLabel } from "@/page/App/components/InspectPanel/label"

export const EventHandlerSetterHeader: FC<EventHandlerSetterHeaderProps> = (
  props,
) => {
  const {
    labelName,
    labelDesc,
    labelDescOption,
    labelNameOption,
    transComponents,
    handleAddItemAsync,
  } = props

  const handleClickNewButton = useCallback(() => {
    handleAddItemAsync()
  }, [handleAddItemAsync])

  return (
    <div css={headerWrapperStyle}>
      <PanelLabel
        labelName={labelName}
        labelDesc={labelDesc}
        labelNameOption={labelNameOption}
        labelDescOption={labelDescOption}
        transComponents={transComponents}
      />
      <div css={fontButtonWrapperStyle} onClick={handleClickNewButton}>
        <AddIcon />
        <span css={fontButtonStyle}>New</span>
      </div>
    </div>
  )
}

EventHandlerSetterHeader.displayName = "EventHandlerSetterHeader"
