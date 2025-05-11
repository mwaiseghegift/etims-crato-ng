export const CRATO_ETIMS_API = "http://etims-api.crato.africa"; // replace with actual base URL

export const API_ENDPOINTS = {
  SELECT_CODE_LIST: `${CRATO_ETIMS_API}/SelectCodeList`,
  SELECT_ITEM_CLASS_LIST: `${CRATO_ETIMS_API}/SelectItemClsList`,
  SELECT_BHF_LIST: `${CRATO_ETIMS_API}/SelectBhfList`,
  SELECT_NOTICE_LIST: `${CRATO_ETIMS_API}/SelectNoticeList`,

  SAVE_BRANCH_CUSTOMER: `${CRATO_ETIMS_API}/SaveBhfCustomer`,
  SAVE_BRANCH_USER: `${CRATO_ETIMS_API}/SaveBhfUser`,
  SAVE_BRANCH_INSURANCE: `${CRATO_ETIMS_API}/SaveBhfInsurance`,

  GET_ALL_CODE_DEFINITION: `${CRATO_ETIMS_API}/GetAllCodeDefinition`,
  UPDATE_ALL_CODE_DEFINITION: `${CRATO_ETIMS_API}/UpdateAllCodeDefinition`,

  SELECT_CUSTOMER: `${CRATO_ETIMS_API}/SelectCustomer`,

  SELECT_IMPORT_ITEM_LIST: `${CRATO_ETIMS_API}/selectImportItemList`,
  UPDATE_IMPORT_ITEM: `${CRATO_ETIMS_API}/UpdateImportItem`,

  INIT_SELECT_OSDC_INFO: `${CRATO_ETIMS_API}/api/Initialization/selectInitOsdcInfo`,
  INIT_SELECT_INFO: `${CRATO_ETIMS_API}/api/Initialization/SelectInitInfo`,

  SAVE_ITEM: `${CRATO_ETIMS_API}/SaveItem`,
  SELECT_ITEM_LIST: `${CRATO_ETIMS_API}/SelectItemList`,
  SAVE_ITEM_COMPOSITION: `${CRATO_ETIMS_API}/SaveItemComposition`,

  SELECT_TRANS_PURCHASE_SALES_LIST: `${CRATO_ETIMS_API}/SelectTrnsPurchaseSalesList`,
  INSERT_PURCHASE: `${CRATO_ETIMS_API}/insertTrnsPurchase`,

  SELECT_STOCK_MOVE_LIST: `${CRATO_ETIMS_API}/SelectStockMoveList`,
  INSERT_STOCK_IO: `${CRATO_ETIMS_API}/InsertStockIO`,
  SAVE_STOCK_MASTER: `${CRATO_ETIMS_API}/SaveStockMaster`,
};
