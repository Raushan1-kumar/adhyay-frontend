import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentData } from '../models/Student';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { FiBook, FiAward, FiTrendingUp, FiCalendar, FiUser } from 'react-icons/fi';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const StudentDashboard = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const studentData = getStudentData(parseInt(id));
      setStudent(studentData);
    }, 800);
  }, [id]);

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-pulse text-2xl font-semibold text-blue-900">Loading Dashboard...</div>
      </div>
    );
  }

  // Prepare data for charts
  const subjectData = student.subjects.map(subject => ({
    subject: subject.name,
    marks: subject.marks,
    percentage: Math.round((subject.marks / subject.total) * 100)
  }));

  const performanceData = student.performance.map((term, index) => ({
    term: term.term,
    percentage: term.percentage,
    fill: COLORS[index % COLORS.length]
  }));

  const radarData = student.subjects.map(subject => ({
    subject: subject.name,
    A: Math.round((subject.marks / subject.total) * 100),
    fullMark: 100
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4 mb-4 md:mb-0"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <FiUser className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{student.name}</h1>
                <p className="text-blue-200">Class {student.class} | Roll No: {student.rollNo}</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3"
            >
              <div className="flex items-center space-x-2">
                <FiAward className="text-yellow-300" />
                <span className="font-medium">Overall Performance:</span>
                <span className="font-bold text-xl">
                  {student.performance[student.performance.length - 1].percentage}%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide"
        >
          {['overview', 'marks'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-2 mx-1 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-blue-900 hover:bg-blue-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Dashboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-8"
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Performance Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
                  <FiTrendingUp className="text-blue-500 h-6 w-6" />
                </div>
                <div className="mt-4 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="term" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="percentage" 
                        stroke="#3B82F6" 
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#3B82F6' }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Subjects Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Subject Analysis</h3>
                  <FiBook className="text-green-500 h-6 w-6" />
                </div>
                <div className="mt-4 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar 
                        name="Performance" 
                        dataKey="A" 
                        stroke="#10B981" 
                        fill="#10B981" 
                        fillOpacity={0.6} 
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Attendance Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>
                  <FiCalendar className="text-purple-500 h-6 w-6" />
                </div>
                <div className="mt-4 flex items-center justify-center h-40">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        strokeDasharray={`${student.attendance}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">{student.attendance}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'marks' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">Subject-wise Marks</h3>
              </div>
              <div className="p-6">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subjectData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="subject" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="percentage" name="Percentage" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                        {subjectData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {subjectData.map((subject, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{subject.subject}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{subject.marks}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{subject.percentage}%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              subject.percentage >= 90 ? 'bg-green-100 text-green-800' :
                              subject.percentage >= 75 ? 'bg-blue-100 text-blue-800' :
                              subject.percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {subject.percentage >= 90 ? 'A+' :
                               subject.percentage >= 75 ? 'A' :
                               subject.percentage >= 60 ? 'B' : 'C'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would follow similar enhanced patterns */}
        </motion.div>
      </main>
    </div>
  );
};

export default StudentDashboard;