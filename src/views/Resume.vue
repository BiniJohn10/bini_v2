<template>
    <div class="bg-portfolio-teal-dark min-h-screen text-white p-8">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold mb-8 animate__animated animate__fadeIn">Resume</h1>
            
            <!-- Experience Section -->
            <section class="mb-12 animate__animated animate__fadeIn">
                <h2 class="text-2xl font-semibold mb-6 text-blue-400">Work Experience</h2>
                <div class="space-y-6">
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold">Senior Developer</h3>
                        <p class="text-blue-400">Company Name | 2020 - Present</p>
                        <ul class="list-disc ml-6 mt-3">
                            <li>Led development of multiple full-stack applications</li>
                            <li>Managed team of 5 developers</li>
                            <li>Implemented CI/CD pipelines</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Education Section -->
            <section class="mb-12 animate__animated animate__fadeIn">
                <h2 class="text-2xl font-semibold mb-6 text-blue-400">Education</h2>
                <div class="bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold">Bachelor's in Computer Science</h3>
                    <p class="text-blue-400">University Name | 2016 - 2020</p>
                    <p class="mt-2">GPA: 3.8/4.0</p>
                </div>
            </section>

            <!-- Skills Section -->
            <section class="animate__animated animate__fadeIn">
                <h2 class="text-2xl font-semibold mb-6 text-blue-400">Skills</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800 p-4 rounded-lg text-center">Vue.js</div>
                    <div class="bg-gray-800 p-4 rounded-lg text-center">JavaScript</div>
                    <div class="bg-gray-800 p-4 rounded-lg text-center">Node.js</div>
                    <div class="bg-gray-800 p-4 rounded-lg text-center">Python</div>
                    <div class="bg-gray-800 p-4 rounded-lg text-center">SQL</div>
                    <div class="bg-gray-800 p-4 rounded-lg text-center">Git</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
</script> 