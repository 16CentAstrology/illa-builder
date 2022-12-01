import { v4 } from "uuid"
import {
  CONTAINER_TYPE,
  PageNode,
  SECTION_POSITION,
  SectionNode,
} from "@/redux/currentApp/editor/components/componentsState"

export const BASIC_BODY_SECTION_CONFIG: SectionNode = {
  displayName: "bodySection1",
  parentNode: "page1",
  showName: "bodySection",
  isDragging: false,
  isResizing: false,
  type: "SECTION_NODE",
  containerType: CONTAINER_TYPE.EDITOR_LAYOUT_SQUARE,
  verticalResize: true,
  h: 0,
  w: 0,
  minH: 0,
  minW: 0,
  unitW: 0,
  unitH: 0,
  x: -1,
  y: -1,
  z: 0,
  props: {
    currentViewIndex: 0,
    viewSortedKey: ["bodySection1-bodySectionContainer1"],
    defaultViewKey: "View 1",
    sectionViewConfigs: [
      {
        id: v4(),
        viewDisplayName: "bodySection1-bodySectionContainer1",
        key: "View 1",
        path: "View 1",
      },
    ],
  },
  childrenNode: [
    {
      displayName: "bodySection1-bodySectionContainer1",
      parentNode: "bodySection",
      showName: "bodySection1-bodySectionContainer1",
      isDragging: false,
      isResizing: false,
      type: "CONTAINER_NODE",
      containerType: CONTAINER_TYPE.EDITOR_DOT_PANEL,
      verticalResize: true,
      h: 0,
      w: 0,
      minH: 0,
      minW: 0,
      unitW: 0,
      unitH: 0,
      x: -1,
      y: -1,
      z: 0,
      childrenNode: [],
      props: {},
    },
  ],
}

export const BASIC_APP_CONFIG: PageNode[] = [
  {
    displayName: "page1",
    parentNode: "root",
    showName: "page",
    isDragging: false,
    isResizing: false,
    type: "PAGE_NODE",
    containerType: CONTAINER_TYPE.EDITOR_PAGE_SQUARE,
    verticalResize: true,
    h: 0,
    w: 0,
    minH: 0,
    minW: 0,
    unitW: 0,
    unitH: 0,
    x: -1,
    y: -1,
    z: 0,
    props: {
      canvasSize: "responsive",
      canvasWidth: "auto",
      layout: "default",
      leftPosition: SECTION_POSITION.NONE,
      rightPosition: SECTION_POSITION.NONE,
      hasFooter: false,
      hasHeader: false,
      hasLeft: false,
      hasRight: false,
      leftWidth: 0,
      rightWidth: 0,
      topHeight: 0,
      bottomHeight: 0,
      isLeftFixed: true,
      isRightFixed: true,
      isHeaderFixed: true,
      isFooterFixed: true,
      showLeftFoldIcon: false,
      showRightFoldIcon: false,
    },
    childrenNode: [BASIC_BODY_SECTION_CONFIG],
  },
]