import { Box, Button, Card, Grid, styled } from "@mui/material";

export const ListItemRoot = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    width: 300,
    height: 300,
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
    padding: 24,
}))

export const ListItemsGridWrapper = styled(Grid)(() => ({
    rowGap: 30,
    columnGap: 30,
}))

export const AddToCartButton = styled(Button)(() => ({
    width: 100,
}))

export const ItemsListHeaderWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))