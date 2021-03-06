/**
 * Return a combination of firstname, middlename and surname
 *
 * @param {String} firstName
 * @param {String} middleName
 * @param {String} surName
 * @param {Boolean} lexicalOrder
 *
 * @returns {String}
 */
const getBaseName = (firstName, middleName, surName, lexicalOrder) => {
  const namesArray = (lexicalOrder ? [surName ? `${surName},` : '', firstName, middleName] : [firstName, middleName, surName]).filter(name => name);

  if (namesArray.length) {
    return namesArray.join(' ');
  }

  return '';
};

/**
 * Return formatted name
 *
 * @param {Object} config
 * @param {String} config.title
 * @param {String} config.suffix
 * @param {String} config.surName
 * @param {String} config.firstName
 * @param {String} config.middleName
 * @param {Boolean} config.lexicalOrder
 * @param {String} config.suffixSeparator
 *
 * @returns {String}
 */
const writeName = ({
  title = '',
  suffix = '',
  surName = '',
  firstName = '',
  middleName = '',
  lexicalOrder = false,
  suffixSeparator = '',
}) => {
  const nameConfig = {
    lexicalOrder,
    title: title.trim(),
    suffix: suffix.trim(),
    surName: surName.trim(),
    firstName: firstName.trim(),
    middleName: middleName.trim(),
    suffixSeparator: suffixSeparator.trim()
  };

  const baseName = getBaseName(
    nameConfig.firstName,
    nameConfig.middleName,
    nameConfig.surName,
    lexicalOrder
  );

  if (!nameConfig.title && !nameConfig.suffix) {
    return baseName;
  }

  if (!nameConfig.title) {
    return `${baseName}${nameConfig.suffixSeparator} ${nameConfig.suffix}`;
  }

  if (!nameConfig.suffix) {
    return `${nameConfig.title} ${baseName}`;
  }

  return `${nameConfig.title} ${baseName}${nameConfig.suffixSeparator} ${
    nameConfig.suffix
  }`;
};

export default writeName;
