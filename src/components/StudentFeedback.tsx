const StudentFeedback = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Real Stories, Real Progress at Think English Language Centre
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Authentic experiences from students who grew their confidence and skills with us.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-6xl bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-gray-200">
            <img
              src="/lovable-uploads/f76ee272-8ee2-4bb4-ae75-6a6e11dbed48.png"
              alt="Student testimonials grid showing feedback from international students including Liu Chengye from China, Ahmed Fouad from Egypt, Zhang Junxia from China, Ruth from China, Mohammad from Syria, Jia Hao from China, Meng Yuan from China, Li Meng from China, and Rachel from China"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;