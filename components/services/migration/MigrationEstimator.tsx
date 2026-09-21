"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

const formatter = new Intl.NumberFormat("en-GB");

export default function MigrationEstimator() {
  const [records, setRecords] = useState(250000);
  const recommendation = useMemo(() => {
    if (records <= 50000) return { plan: "Starter", note: "Guided self-serve is a good fit for this dataset." };
    if (records <= 500000) return { plan: "Managed migration", note: "Engineer-led mapping and cutover are recommended." };
    return { plan: "Enterprise command room", note: "Parallel queues and a dedicated launch team are recommended." };
  }, [records]);

  return (
    <div className="mg-estimator">
      <div className="mg-estimator__copy">
        <span>Record volume estimator</span>
        <h3>How big is your Magento dataset?</h3>
        <p>Use the total of products, customers, orders and related records as a planning guide.</p>
      </div>
      <div className="mg-estimator__control">
        <div className="mg-estimator__value">
          <strong>{formatter.format(records)}</strong>
          <span>records</span>
        </div>
        <input
          aria-label="Estimated Magento record volume"
          type="range"
          min="10000"
          max="2000000"
          step="10000"
          value={records}
          onChange={(event) => setRecords(Number(event.target.value))}
        />
        <div className="mg-estimator__range"><span>10K</span><span>2M+</span></div>
      </div>
      <div className="mg-estimator__result" aria-live="polite">
        <span>Recommended setup</span>
        <strong>{recommendation.plan}</strong>
        <p>{recommendation.note}</p>
        <Link href="/contact-us">Discuss your dataset <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}
