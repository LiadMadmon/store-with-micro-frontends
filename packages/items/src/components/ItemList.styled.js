import { Box, Button, Card, Grid, styled } from "@mui/material";

const LIST_ITEM_DIMENSIONS = 300;
const LIST_ITEM_GRID_GAP = 30;
export const ListItemRoot = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    width: LIST_ITEM_DIMENSIONS,
    height: LIST_ITEM_DIMENSIONS,
}))

export const ItemTitleWrapper = styled(Box)(() => ({
    width: '100%',
    textAlign: 'left',
}))

export const ItemActionsWrapper = styled(Box)(() => ({
    width: '100%',
    textAlign: 'right',
}))

export const ItemListRoot = styled(Box)(() => ({
    minWidth: 1020,
    width: 'fit-content',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
}))

export const ListItemsGridWrapper = styled(Grid)(() => ({
    flex: 1,
    rowGap: LIST_ITEM_GRID_GAP,
    columnGap: LIST_ITEM_GRID_GAP,
}))

export const AddToCartButton = styled(Button)(() => ({
    width: 100,
}))

export const ItemsListHeaderWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))
