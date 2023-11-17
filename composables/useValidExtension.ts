/**
 * Composable function for validating file extension
 * @param filename for validate
 * @param exts array of allowed extensions
 * @returns boolean: true if file extension is valid
 */
export const useValidExtension = (filename: string, exts: string[]) => {
  return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
    filename,
  );
};
