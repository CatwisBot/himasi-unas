'use client'

import { useState, useRef } from 'react'
import { Upload, User, Mail, Phone, Calendar, Building, FileImage, Instagram, MessageSquare, AlertCircle, CheckCircle, X } from 'lucide-react'

interface FormData {
  email: string
  fullName: string
  phone: string
  yearClass: string
  faculty: string
  major: string
  instagramHandle: string
  motivation: string
  specialRequest: string
}

interface FormErrors {
  [key: string]: string
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fullName: '',
    phone: '',
    yearClass: '',
    faculty: '',
    major: '',
    instagramHandle: '',
    motivation: '',
    specialRequest: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [instagramProof, setInstagramProof] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, instagramProof: 'File harus berformat JPG, JPEG, atau PNG' }))
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, instagramProof: 'Ukuran file maksimal 5MB' }))
      return
    }

    setInstagramProof(file)
    setErrors(prev => ({ ...prev, instagramProof: '' }))

    // Create preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  // Remove file
  const removeFile = () => {
    setInstagramProof(null)
    setPreviewUrl('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required fields
    if (!formData.email.trim()) newErrors.email = 'Email wajib diisi'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Format email tidak valid'
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi'
    if (!formData.phone.trim()) newErrors.phone = 'Nomor HP wajib diisi'
    else if (!/^[\d\-\+\(\)\s]+$/.test(formData.phone)) newErrors.phone = 'Format nomor HP tidak valid'
    
    if (!formData.yearClass.trim()) newErrors.yearClass = 'Tahun angkatan wajib dipilih'
    if (!formData.faculty.trim()) newErrors.faculty = 'Fakultas wajib diisi'
    if (!formData.major.trim()) newErrors.major = 'Jurusan wajib diisi'
    if (!formData.instagramHandle.trim()) newErrors.instagramHandle = 'Username Instagram wajib diisi'
    
    if (!instagramProof) newErrors.instagramProof = 'Screenshot bukti follow Instagram wajib diupload'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prepare registration data (tidak perlu activityId karena hanya 1 kegiatan)
      const registrationData = {
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone,
        yearClass: formData.yearClass,
        faculty: formData.faculty,
        major: formData.major,
        instagramHandle: formData.instagramHandle,
        motivation: formData.motivation || null,
        specialRequest: formData.specialRequest || null,
        instagramProof: instagramProof ? 'uploaded-screenshot.jpg' : null // For now, just placeholder
      }

      // Submit to API
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Gagal mengirim pendaftaran')
      }
      
      setSubmitStatus('success')
      setSubmitMessage(`Pendaftaran berhasil! Data Anda telah tersimpan di database. Terima kasih sudah mendaftar.`)
      
      // Reset form
      setFormData({
        email: '',
        fullName: '',
        phone: '',
        yearClass: '',
        faculty: '',
        major: '',
        instagramHandle: '',
        motivation: '',
        specialRequest: ''
      })
      setInstagramProof(null)
      setPreviewUrl('')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }

    } catch (error) {
      console.error('Error submitting registration:', error)
      setSubmitStatus('error')
      
      // Show specific error message from API if available
      if (error instanceof Error) {
        setSubmitMessage(error.message)
      } else {
        setSubmitMessage('Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Status Message */}
      {submitStatus !== 'idle' && (
        <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 shadow-lg ${
          submitStatus === 'success' 
            ? 'bg-green-50 border-2 border-green-200 text-green-800' 
            : 'bg-red-50 border-2 border-red-200 text-red-800'
        }`}>
          {submitStatus === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{submitMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl">
        {/* Form Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4B061A] to-[#8B1C3B] rounded-full mb-4 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Informasi Pendaftar</h2>
          <p className="text-gray-600">Lengkapi data diri Anda dengan benar</p>
        </div>

        <div className="space-y-8">
          
          {/* Section 1: Data Pribadi */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-[#4B061A]" />
              Data Pribadi
            </h3>
            <div className="grid gap-6">
              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                  <Mail className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                  placeholder="contoh@student.unas.ac.id"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
              </div>

              {/* Nama Lengkap */}
              <div className="group">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-3">
                  <User className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                  placeholder="Nama lengkap sesuai KTP"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.fullName}</p>}
              </div>

              {/* Nomor HP */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                  <Phone className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Nomor HP <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                  placeholder="081234567890"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Data Akademik */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-[#4B061A]" />
              Data Akademik
            </h3>
            <div className="grid gap-6">
              {/* Tahun Angkatan */}
              <div className="group">
                <label htmlFor="yearClass" className="block text-sm font-medium text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Tahun Angkatan <span className="text-red-500">*</span>
                </label>
                <select
                  id="yearClass"
                  name="yearClass"
                  value={formData.yearClass}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                >
                  <option value="" className="text-gray-500">Pilih Tahun Angkatan</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <option key={year} value={year.toString()} className="text-gray-800">
                        {year}
                      </option>
                    )
                  })}
                </select>
                {errors.yearClass && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.yearClass}</p>}
              </div>

              {/* Fakultas dan Jurusan */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-3">
                    <Building className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                    Fakultas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="faculty"
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                    placeholder="FTKI"
                  />
                  {errors.faculty && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.faculty}</p>}
                </div>
                
                <div className="group">
                  <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-3">
                    <Building className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                    Jurusan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                    placeholder="Sistem Informasi"
                  />
                  {errors.major && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.major}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Instagram & Bukti Follow */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Instagram className="w-5 h-5 mr-2 text-[#4B061A]" />
              Instagram & Bukti Follow
            </h3>
            <div className="grid gap-6">
              {/* Instagram Handle */}
              <div className="group">
                <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700 mb-3">
                  <Instagram className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Username Instagram <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="instagramHandle"
                  name="instagramHandle"
                  value={formData.instagramHandle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm"
                  placeholder="@username_instagram"
                />
                {errors.instagramHandle && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.instagramHandle}</p>}
              </div>

              {/* Upload Screenshot */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <FileImage className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Screenshot Bukti Follow Instagram HIMASI <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
                  {!previewUrl ? (
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                        <Upload className="w-8 h-8 text-gray-400" />
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-gradient-to-r from-[#4B061A] to-[#8B1C3B] text-white px-6 py-3 rounded-xl hover:from-[#5B0720] hover:to-[#9B2C4B] transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                      >
                        Pilih File Gambar
                      </button>
                      <p className="text-gray-600 text-sm mt-3">Format: JPG, JPEG, PNG (Max: 5MB)</p>
                      <p className="text-gray-500 text-xs mt-1">Screenshot harus menunjukkan bahwa Anda sudah follow @himasi_unas</p>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={previewUrl}
                        alt="Preview Screenshot"
                        className="w-full max-w-sm mx-auto rounded-xl shadow-lg border-2 border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg transform hover:scale-110"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="text-center mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
                        <p className="text-gray-800 text-sm font-medium">
                          {instagramProof?.name}
                        </p>
                        <p className="text-green-600 text-xs mt-1 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          File berhasil diupload
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {errors.instagramProof && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.instagramProof}</p>}
              </div>
            </div>
          </div>

          {/* Section 4: Informasi Tambahan */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-[#4B061A]" />
              Informasi Tambahan
            </h3>
            <div className="grid gap-6">
              {/* Motivasi */}
              <div className="group">
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-3">
                  <MessageSquare className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Motivasi Mengikuti Kegiatan <span className="text-gray-500">(Opsional)</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm resize-none"
                  placeholder="Ceritakan motivasi Anda mengikuti kegiatan ini... Apa yang ingin Anda pelajari?"
                />
              </div>

              {/* Permintaan Khusus */}
              <div className="group">
                <label htmlFor="specialRequest" className="block text-sm font-medium text-gray-700 mb-3">
                  <MessageSquare className="w-4 h-4 inline mr-2 text-[#4B061A]" />
                  Permintaan Khusus <span className="text-gray-500">(Opsional)</span>
                </label>
                <textarea
                  id="specialRequest"
                  name="specialRequest"
                  rows={3}
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B061A] focus:border-[#4B061A] transition-all duration-300 hover:border-gray-400 shadow-sm resize-none"
                  placeholder="Ada permintaan khusus? (misal: alergi makanan, kebutuhan aksesibilitas, dll)"
                />
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4B061A] to-[#8B1C3B] rounded-full mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Siap untuk Submit?</h3>
              <p className="text-gray-600 text-sm">
                Pastikan semua data sudah benar sebelum mengirim pendaftaran.
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#4B061A] to-[#8B1C3B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-[#5B0720] hover:to-[#9B2C4B] hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  Mengirim Pendaftaran...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Kirim Pendaftaran
                </span>
              )}
            </button>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="flex items-center justify-center mb-2 text-blue-700">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Syarat dan Ketentuan
                </span>
                Dengan mengirim form ini, Anda setuju dengan syarat dan ketentuan yang berlaku. 
                Data yang Anda berikan akan digunakan untuk keperluan pendaftaran kegiatan HIMASI.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}