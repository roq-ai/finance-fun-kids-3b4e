interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['User'],
  customerRoles: [],
  tenantRoles: ['User'],
  tenantName: 'Student',
  applicationName: 'Finance Fun Kids',
  addOns: ['chat', 'notifications', 'file'],
};
