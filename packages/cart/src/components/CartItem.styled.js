import { Box, Card, styled } from "@mui/material";

export const CartItemsWrapper = styled(Card)(() => ({
    padding: 12,
    minWidth: 400,
    display: 'flex',
    flexDirection: 'column',
}))

export const StyledCartItem = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    padding: '12px 48px',
    minHeight: 30,
    minWidth: 200,
    marginBottom: 12,
}))
