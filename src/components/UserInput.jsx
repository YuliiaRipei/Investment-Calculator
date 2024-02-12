import { useState } from "react";

export default function UserInput({
  firstLabel,
  secondLabel,
  thirdLabel,
  fourthLabel,
  onChange,
  values,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor={firstLabel}>{firstLabel}</label>
          <input
            type="number"
            id={firstLabel}
            name={firstLabel}
            value={values.initialInvestment}
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={secondLabel}>{secondLabel}</label>
          <input
            type="number"
            id={secondLabel}
            name={secondLabel}
            value={values.annualInvestment}
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor={thirdLabel}>{thirdLabel}</label>
          <input
            type="number"
            id={thirdLabel}
            name={thirdLabel}
            value={values.expectedReturn}
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor={fourthLabel}>{fourthLabel}</label>
          <input
            type="number"
            id={fourthLabel}
            name={fourthLabel}
            value={values.duration}
            required
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
