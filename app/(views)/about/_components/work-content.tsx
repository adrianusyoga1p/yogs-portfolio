import React from 'react'
import { CardAbout, CardImage } from './card-about'
import Image from 'next/image'
import { Dot } from 'lucide-react'
import { WORK } from '@/lib/data/work-experience'

const WorkContent = () => {
  return (
    <div className="space-y-6">
      {WORK.map((data, i) => (
        <CardAbout key={i}>
          <CardImage>
            <Image src={data.logoUrl} width={70} height={70} alt="logo" />
          </CardImage>
          <div className="space-y-2">
            <h1 className="text-lg font-semibold">
              {data.companyFullName}
              <span className="text-gray-400 text-sm w-fit ml-2">
                ({data.companyLabel})
              </span>
            </h1>
            <div className="space-y-1 max-sm:-ml-2">
              <div className="flex max-sm:flex-col sm:items-center text-gray-400">
                <p className="text-sm flex items-center">
                  <Dot className="sm:hidden" /> {data.role || "-"}
                </p>
                <p className="text-sm flex items-center">
                  <Dot /> {data.workMode || "-"}
                </p>
                <p className="text-sm flex items-center">
                  <Dot /> {data.workType || "-"}
                </p>
              </div>
              <div className="flex max-sm:flex-col sm:items-center text-gray-400">
                <p className="text-sm flex items-center">
                  <Dot className="sm:hidden" /> {data.fromDate} -{" "}
                  {data.endDate}
                </p>
                <p className="text-sm flex items-center">
                  <Dot /> {data.address}
                </p>
              </div>
            </div>
          </div>
        </CardAbout>
      ))}
    </div>
  )
}

export default WorkContent