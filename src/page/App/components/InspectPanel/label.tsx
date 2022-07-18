import { FC } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { useTranslation, Trans } from "react-i18next"
import { applyLabelTipsStyle, labelTipsTextStyle } from "./style"
import { PanelLabelProps } from "./interface"

export const PanelLabel: FC<PanelLabelProps> = (props) => {
  const {
    labelDesc,
    labelName,
    isInList,
    labelDescOption,
    labelNameOption,
    transComponents,
  } = props

  const { t } = useTranslation()

  return (
    <Tooltip
      content={
        <span css={labelTipsTextStyle}>
          <Trans components={{ ...transComponents }}>
            {t(labelDesc, labelDescOption)}
          </Trans>
        </span>
      }
      trigger="hover"
      position="left"
      maxWidth="240px"
      disabled={!labelDesc}
    >
      <span css={applyLabelTipsStyle(isInList, !!labelDesc)}>
        {t(labelName, labelNameOption)}
      </span>
    </Tooltip>
  )
}

PanelLabel.displayName = "PanelLabel"
