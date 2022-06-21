import { GroceriesMockData } from "../MockData";

/* filtering Mock data based on Price values*/
export const PriceFilter = (price) => {
  /*returns collections of object whichever satisfies our condition*/
  return GroceriesMockData.filter((item) => item.avg_mrp < price);
};

/* filtering Mock data based on Discount values*/
export const DiscountFiltter = (price) => {
  /*returns collections of object whichever satisfies our condition*/
  return GroceriesMockData.filter((item) => item.avg_discount < price);
};

/* filtering Mock data based on Price && discount && catg values*/
export const PriceDiscFilter = (arg) => {
  /*
    {
        price:30,
discount:20,
    }
  /*returns collections of object whichever satisfies our condition*/
  return GroceriesMockData.filter(
    (item) => item.avg_mrp < arg.price && item.avg_discount < arg.discount
  );
};

/*Identify changes in fliter object*/
/* default value for filters
    {
        price:null,
discount:null,
    }*/
export const switchFilterOptions = (arg) => {
  /* to filter exact above method for filtering*/
  switch (arg) {
    case arg.price !== null && arg.discount === null:
      return PriceFilter(arg.price);

    case arg.price === null && arg.discount !== null:
      return DiscountFiltter(arg.discount);

    default:
      return PriceDiscFilter(arg);
  }
};
