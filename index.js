dasdas
gfghfhjgfjh



const splitValue = value.split(',');

return (
  <>
    <ColoredText style={{ display: 'flex' }} color={color}>
      {splitValue[0]}
      <ColoredText color={Colors.PaleCornflowerBlue}>,{splitValue[1]}</ColoredText>
    </ColoredText>
  </>
);


const splitValue = value.split(',');

return (
  <>
    {splitValue[0] == 'Сходимость' && (
      <ColoredText style={{ display: 'flex' }} color={color}>
        {splitValue[0]}
        <ColoredText color={Colors.PaleCornflowerBlue}>,{splitValue[1]}</ColoredText>
      </ColoredText>
    )}
    {splitValue[0] !== 'Сходимость' && <ColoredText color={color}>{value}</ColoredText>}
  </>

