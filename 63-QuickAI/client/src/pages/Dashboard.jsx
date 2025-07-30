import React, { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

const dummyCreationData = [
  {
    id: 1,
    title: 'Article 1',
    content: 'Content 1',
    createdAt: '2023-01-01',
  },
  {
    id: 2,
    title: 'Article 2',
    content: 'Content 2',
    createdAt: '2023-01-02',
  },
]

const Dashboard = () => {

  const [creation, setCreation] = useState([])

  const getDashboardData = async () => {
    setCreation(dummyCreationData)
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations Card */}
        <div className="flex justify-between items-center w-72 p-6 bg-white rounded-xl border border-gray-200">
          <div>
            <p>Total Creations</p>
            <h2>{creation.length}</h2>
          </div>
          <div>
            <Sparkles className="w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard