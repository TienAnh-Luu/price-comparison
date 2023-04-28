export const getLazadaPriceInUSD = (product) => {
  if (product) {
    const vndPrice = product.item.sku.def.promotionPrice
      ? product.item.sku.def.promotionPrice
      : product.item.sku.def.price
      ? product.item.sku.def.price
      : 0;

    return (Number(vndPrice) / 23000).toFixed(2);
  }
};
