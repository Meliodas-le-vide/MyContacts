<template>     
           <div class="bg-gray-50 min-h-screen">
                <!-- Header -->
                <header class="w-full bg-white shadow-sm">
                    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
                    <!-- Logo -->
                    <div class="flex items-center space-x-2">
                        <div class="w-6 h-6 bg-green-500 rounded-full"></div>
                        <span class="text-lg font-semibold text-gray-800">MyContacts</span>
                    </div>     

                    
                    <!-- Right Buttons -->
                    <div class="flex items-center space-x-4">
                         <router-link to="/login">
                               <a  class="text-gray-700 hover:text-gray-900">Log in</a>
                         </router-link>
                             <router-link to="/register">
                                  <a
                                    class="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
                                    >
                                    Signup
                                </a>
                             </router-link>
                      
                    </div>
                    </div>
                </header>

                <!-- Hero Section -->
                <div class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
                    <!-- Left Content -->
                    <div>
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Bienvenu sur  <br /> L'appli my Contacts
                    </h1>
                    <p class="text-gray-600 mb-6">
                    </p>
                     <router-link to="/register">
                                     <a
                                        
                                        class="px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-lg hover:bg-green-600 transition"
                                    >
                                        Get started
                                    </a>
                     </router-link>
               
                    </div>

                    <!-- Right Content -->
                    <div class="relative">
                    <div class="absolute -left-8 -top-8 w-24 h-24 bg-green-100 rounded-full"></div>
                    <img
                        src="https://via.placeholder.com/300x400" 
                        alt="Acorns Card"
                        class="absolute -rotate-12 transform translate-y-6"
                    />
                    <img
                        src="https://static-ssl.businessinsider.com/image/5be0ca3dda27f82a0016f894-1200/acorn.png" 
                        alt="Acorns Mobile"
                        class="relative z-10 mx-auto"
                    />
                    </div>
                </div>
                <section class="py-12">
                    <div class="container mx-auto px-4">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Feature One</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.</p>
                            </div>
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Feature Two</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.</p>
                            </div>
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Feature Three</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.</p>
                            </div>
                        </div>
                    </div>
                </section>
                </div>   
            <footer class="bg-green-500  py-6">
                <div class="container mx-auto px-4 text-center text-white">
                    <p>&copy; 2023 Your Brand. All rights reserved.</p>
                </div>
            </footer>
</template>
<script>

</script>
<style></style>