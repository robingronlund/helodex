import { convertHeightWeightMeasurements } from '../../../utils/convert-measures';

interface MeasurementsProps {
  height: number;
  weight: number;
}

export const Measurements = ({ height, weight }: MeasurementsProps) => {
  return (
    <>
      <div>
        <h4>Height</h4>
        <p>{convertHeightWeightMeasurements(height)}m</p>
      </div>

      <div>
        <h4>Weight</h4>
        <p>{convertHeightWeightMeasurements(weight)}kg</p>
      </div>
    </>
  );
};
