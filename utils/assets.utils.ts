export const resolveSource = (asset: any) => {
  if (typeof asset === 'string') {
    return { uri: asset };
  }

  return asset;
}
