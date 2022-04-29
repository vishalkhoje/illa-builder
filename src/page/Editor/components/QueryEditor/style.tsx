import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const QueryEditorContainer = css`
  display: flex;
  height: 100%;
  border-top: 1px solid ${globalColor(`--${illaPrefix}-grayblue-08`)};
  min-height: 300px;
  max-height: calc(100% - 50px);
`

export const QueryEditorPanelWrapper = css`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 0 auto;
  z-index: 1000;
`

export function applyContainerHeight(height: number): SerializedStyles {
  return css({
    height,
  })
}

export function applyResizerCss(
  isResizing: boolean,
  bottom: number,
): SerializedStyles {
  const bgColor = css`
    background-color: ${globalColor(`--${illaPrefix}-grayblue-08`)};
  `
  return css`
    bottom: ${bottom}px;
    height: 5px;
    width: 100%;
    position: absolute;
    cursor: row-resize;
    transition: background-color 0.2s ease-in-out;
    ${isResizing && bgColor};
    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-grayblue-08`)};
    }
  `
}
